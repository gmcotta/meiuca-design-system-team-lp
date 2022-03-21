import React from 'react';
import '@gmcotta/design-system-core/dist/components/card';
import '@gmcotta/design-system-core/dist/components/tag';
import '@gmcotta/design-system-core/dist/components/heading';
import '@gmcotta/design-system-core/dist/components/paragraph';

import './card-content.styles.scss';

export const CardContent = ({ 
  tagContent, 
  headingContent, 
  paragraphContent 
}) => {
  return (
    <dsc-card class="card-content">
      <dsc-tag>{tagContent}</dsc-tag>
      <dsc-heading level="h3" size="lg">{headingContent}</dsc-heading>
      <dsc-paragraph>{paragraphContent}</dsc-paragraph>
    </dsc-card>
  );
}