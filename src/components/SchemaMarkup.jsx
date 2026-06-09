import { useEffect } from 'react';

/**
 * SchemaMarkup
 * Injects one or more JSON-LD <script> tags into <head> when a page mounts,
 * and removes them when the page unmounts — keeping schemas page-specific.
 *
 * Usage:
 *   <SchemaMarkup schemas={[{ "@context": "...", "@type": "..." }]} />
 */
function SchemaMarkup({ schemas = [] }) {
  useEffect(() => {
    const insertedNodes = schemas.map((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema-markup', 'true');
      script.textContent = JSON.stringify(schema, null, 2);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      insertedNodes.forEach((node) => {
        if (node && node.parentNode) {
          node.parentNode.removeChild(node);
        }
      });
    };
  }, []);

  return null;
}

export default SchemaMarkup;
