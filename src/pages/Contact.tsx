import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaGithub, FaLinkedin, FaTwitter, FaCheck, FaTimes
} from 'react-icons/fa';
import ResponsiveContainer from '../components/ResponsiveContainer';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
  padding: 6rem 0;
`;

const PageTitle = styled(motion.h1)`
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const PageSubtitle = styled(motion.p)`
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin-bottom: 4rem;
  font-size: 1.2rem;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 40% 60%;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  height: fit-content;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
`;

const IconBox = styled.div`
  background-color: ${({ theme }) => `${theme.primary}20`};
  color: ${({ theme }) => theme.primary};
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled(motion.a)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => `${theme.primary}20`};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.primary}30`};
    outline: none;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: all 0.3s ease;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.primary}30`};
    outline: none;
  }
`;

const SubmitButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-weight: 600;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px ${({ theme }) => `${theme.primary}50`};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: ${({ theme }) => theme.accent};
    transform: translateY(-2px);
    box-shadow: 0 6px 12px ${({ theme }) => `${theme.primary}50`};
  }
  
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ErrorMessage = styled(motion.span)`
  color: #e74c3c;
  font-size: 0.85rem;
`;

const NotificationOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const NotificationBox = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  max-width: 400px;
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const NotificationIcon = styled.div<{ success: boolean }>`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${({ success }) => success ? '#2ecc71' : '#e74c3c'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 1.5rem;
`;

const NotificationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const NotificationMessage = styled.p`
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  margin-bottom: 1.5rem;
`;

const NotificationButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

interface FormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormInputs>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    show: boolean;
    success: boolean;
    message: string;
  }>({
    show: false,
    success: false,
    message: ''
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = t('contact.nameRequired');
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.emailRequired');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.emailInvalid');
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.subjectRequired');
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.messageRequired');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Implement email service integration (EmailJS example)
    try {
      // Replace with your EmailJS service ID, template ID, and public key
      // await emailjs.sendForm(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formRef.current!,
      //   'YOUR_PUBLIC_KEY'
      // );
      
      // Simulating API call for demonstration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setNotification({
        show: true,
        success: true,
        message: t('contact.success')
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setNotification({
        show: true,
        success: false,
        message: t('contact.error')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeNotification = () => {
    setNotification(prev => ({
      ...prev,
      show: false
    }));
  };
  
  return (
    <ContactSection>
      <ResponsiveContainer>
        <PageTitle
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t('contact.title')}
        </PageTitle>
        <PageSubtitle
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('contact.subtitle')}
        </PageSubtitle>
        
        <ContactContainer>
          <ContactInfo
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <InfoItem>
              <IconBox>
                <FaEnvelope />
              </IconBox>
              <InfoContent>
                <InfoTitle>Email</InfoTitle>
                <InfoText>contact@andresmazo.com</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <IconBox>
                <FaPhone />
              </IconBox>
              <InfoContent>
                <InfoTitle>{t('contact.phone')}</InfoTitle>
                <InfoText>+57 (XXX) XXXXXXX</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <IconBox>
                <FaMapMarkerAlt />
              </IconBox>
              <InfoContent>
                <InfoTitle>{t('contact.location')}</InfoTitle>
                <InfoText>Medellín, Colombia</InfoText>
              </InfoContent>
            </InfoItem>
            
            <SocialLinks>
              <SocialLink href="https://github.com/andrezmazo" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/andresmazo" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="https://twitter.com/andresmazo" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          
          <ContactForm
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FormGroup className={formData.name ? 'filled' : ''}>
              <FormLabel htmlFor="name">{t('contact.name')}</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <AnimatePresence>
                {errors.name && (
                  <ErrorMessage
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {errors.name}
                  </ErrorMessage>
                )}
              </AnimatePresence>
            </FormGroup>
            
            <FormGroup className={formData.email ? 'filled' : ''}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <AnimatePresence>
                {errors.email && (
                  <ErrorMessage
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {errors.email}
                  </ErrorMessage>
                )}
              </AnimatePresence>
            </FormGroup>
            
            <FormGroup className={formData.subject ? 'filled' : ''}>
              <FormLabel htmlFor="subject">{t('contact.subject')}</FormLabel>
              <FormInput
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <AnimatePresence>
                {errors.subject && (
                  <ErrorMessage
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {errors.subject}
                  </ErrorMessage>
                )}
              </AnimatePresence>
            </FormGroup>
            
            <FormGroup className={formData.message ? 'filled' : ''}>
              <FormLabel htmlFor="message">{t('contact.message')}</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <AnimatePresence>
                {errors.message && (
                  <ErrorMessage
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {errors.message}
                  </ErrorMessage>
                )}
              </AnimatePresence>
            </FormGroup>
            
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? t('contact.sending') : t('contact.send')}
            </SubmitButton>
          </ContactForm>
        </ContactContainer>
      </ResponsiveContainer>
      
      <AnimatePresence>
        {notification.show && (
          <NotificationOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <NotificationBox
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <NotificationIcon success={notification.success}>
                {notification.success ? <FaCheck /> : <FaTimes />}
              </NotificationIcon>
              <NotificationTitle>
                {notification.success ? t('contact.thankYou') : t('contact.sorry')}
              </NotificationTitle>
              <NotificationMessage>{notification.message}</NotificationMessage>
              <NotificationButton onClick={closeNotification}>
                {t('contact.close')}
              </NotificationButton>
            </NotificationBox>
          </NotificationOverlay>
        )}
      </AnimatePresence>
    </ContactSection>
  );
};

export default Contact;
