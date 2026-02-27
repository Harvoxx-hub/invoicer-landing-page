/**
 * Creates a mailto link with pre-filled subject and body
 * @param {Object} params - Email parameters
 * @param {string} params.to - Recipient email address
 * @param {string} params.subject - Email subject
 * @param {string} params.body - Email body
 * @returns {string} - Formatted mailto URL
 */
export const createMailtoLink = ({ to, subject, body }) => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
};

/**
 * Creates a mailto link from contact form data
 * @param {Object} data - Form data
 * @returns {string} - Formatted mailto URL
 */
export const createContactFormMailto = (data) => {
  const subject = `Contact from ${data.name} - ${data.businessType}`;
  const body = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Business Type: ${data.businessType}

Message:
${data.message}
  `.trim();

  return createMailtoLink({
    to: 'support@getinvoicer.app',
    subject,
    body,
  });
};

/**
 * Creates a mailto link for newsletter subscription
 * @param {string} email - Subscriber email
 * @returns {string} - Formatted mailto URL
 */
export const createNewsletterMailto = (email) => {
  const subject = 'Newsletter Subscription';
  const body = `Please subscribe the following email to the newsletter:\n\n${email}`;

  return createMailtoLink({
    to: 'support@getinvoicer.app',
    subject,
    body,
  });
};

/**
 * Creates a mailto link from agent registration form data
 * @param {Object} data - Agent form data
 * @returns {string} - Formatted mailto URL
 */
export const createAgentFormMailto = (data) => {
  const subject = `New Agent Registration - ${data.firstName} ${data.lastName}`;
  const body = `
New Invoicer Agent Registration

First Name: ${data.firstName}
Last Name: ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address || 'Not provided'}
City: ${data.city}
State: ${data.state || 'Not provided'}
Country: ${data.country}
  `.trim();

  return createMailtoLink({
    to: 'support@getinvoicer.app',
    subject,
    body,
  });
};
