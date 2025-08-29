"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { DATA } from "@/data";

export const Footer = () => {
  const { name, description, contact, socialLinks, services, copyright } = DATA.footer;

  const currentDate = new Date();

  return (
    <footer className="bg-content1 py-12">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
            <p className="text-foreground-500 mb-4">{description}</p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  aria-label={social.platform}
                  href={social.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button isIconOnly variant="light">
                    <Icon className="w-5 h-5" icon={social.icon} />
                    <span className="sr-only">{social.platform}</span>
                  </Button>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-foreground-500">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-foreground-500">
              <li className="flex items-center gap-2">
                <Icon icon="lucide:mail" />
                <a className="hover:text-foreground-900 hover:underline" href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:phone" />
                <a className="hover:text-foreground-900 hover:underline" href={`tel:${contact.phone}`}>{contact.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:message-circle-more" />
                <a className="hover:text-foreground-900 hover:underline" href={contact.whatsAppLink}>{contact.whatsAppLabel}</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:map-pin" />
                {contact.location}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-divider pt-8 text-center text-foreground-500">
          <p>{copyright(currentDate, name)}</p>
        </div>
      </motion.div>
    </footer>
  );
};
