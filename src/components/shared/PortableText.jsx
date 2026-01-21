import { PortableText as PortableTextReact } from '@portabletext/react';

// Custom components for rendering Sanity block content
const components = {
  block: {
    // Headings
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{children}</h4>
    ),
    // Paragraph
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-4 py-2 my-6 italic text-gray-600 bg-gray-50 rounded-r">
        {children}
      </blockquote>
    ),
  },
  list: {
    // Bullet list
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 ml-4">
        {children}
      </ul>
    ),
    // Numbered list
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700 ml-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-2">{children}</li>,
    number: ({ children }) => <li className="ml-2">{children}</li>,
  },
  marks: {
    // Strong/Bold
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    // Emphasis/Italic
    em: ({ children }) => <em className="italic">{children}</em>,
    // Code
    code: ({ children }) => (
      <code className="bg-gray-100 text-primary px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    // Link
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-accent hover:text-accent/80 underline transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    // Image
    image: ({ value }) => (
      <figure className="my-8">
        <img
          src={value.url || value.asset?.url}
          alt={value.alt || ''}
          className="w-full rounded-lg shadow-md"
          loading="lazy"
        />
        {value.caption && (
          <figcaption className="text-sm text-gray-600 text-center mt-2 italic">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
};

const PortableText = ({ value }) => {
  if (!value) return null;

  return <PortableTextReact value={value} components={components} />;
};

export default PortableText;
