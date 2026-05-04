import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingBlob } from "@/components/portfolio/common/FloatingBlob";
import { SectionTitle } from "@/components/portfolio/common/SectionTitle";
import { contactMessages } from "@/messages/contact.messages";
import "@/components/portfolio/styles/ContactSection.css";

export function ContactSection() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmailToMe = async (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send message.");
    }

    return data;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSending(true);
    setIsSent(false);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await sendEmailToMe({
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
      });

      setIsSent(true);
      form.reset();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <FloatingBlob className="contactBlobLeft" />
      <FloatingBlob className="contactBlobRight" />

      <div className="contactContainer">
        <SectionTitle
          eyebrow={contactMessages.eyebrow}
          title={contactMessages.title}
          description={contactMessages.description}
        />

        <div className="contactGrid">
          <Card className="contactInfoCard">
            <CardContent className="contactCardContent">
              <h3 className="contactTitle">{contactMessages.cardTitle}</h3>

              <p className="contactText">{contactMessages.cardDescription}</p>

              <div className="contactMailWrap">
                <a
                  href={`mailto:${contactMessages.email}`}
                  className="contactEmailLink"
                >
                  <Mail className="contactMailIcon" />
                  {contactMessages.email}
                </a>
              </div>
              <div className="contactLinkedinWrap">
                <a
                  href={contactMessages.linkedin}
                  className="contactLinkedinLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="contactLinkedinIcon" />
                  {contactMessages.linkedinName}
                </a>
              </div>
              <div className="contactGithubWrap">
                <a
                  href={contactMessages.github}
                  className="contactGithubLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="contactGithubIcon" />
                  {contactMessages.githubName}
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="contactFormCard">
            <CardContent className="contactCardContent">
              <form onSubmit={handleSubmit} className="contactForm">
                <div className="contactFormRow">
                  <label className="contactLabel">
                    <span className="contactLabelText">
                      {contactMessages.form.nameLabel}
                    </span>

                    <input
                      name="name"
                      required
                      className="contactInput contactInputBlue"
                      placeholder={contactMessages.form.namePlaceholder}
                    />
                  </label>

                  <label className="contactLabel">
                    <span className="contactLabelText">
                      {contactMessages.form.emailLabel}
                    </span>

                    <input
                      name="email"
                      type="email"
                      required
                      className="contactInput contactInputRed"
                      placeholder={contactMessages.form.emailPlaceholder}
                    />
                  </label>
                </div>

                <label className="contactLabel">
                  <span className="contactLabelText">
                    {contactMessages.form.messageLabel}
                  </span>

                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="contactTextarea"
                    placeholder={contactMessages.form.messagePlaceholder}
                  />
                </label>

                <Button
                  type="submit"
                  className="contactSubmit"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : contactMessages.form.submit}
                  <Send className="contactSendIcon" />
                </Button>

                <p className="note">{contactMessages.form.note}</p>

                {isSent && (
                  <p className="contactSuccess">
                    {contactMessages.form.success}
                  </p>
                )}

                {errorMessage && (
                  <p className="contactError">{contactMessages.form.error}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
