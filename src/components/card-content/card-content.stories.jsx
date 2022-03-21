import React from 'react';

import { CardContent as CardContentComponent } from '.';

export default {
  title: 'Landing Page/Card Content',
  component: CardContentComponent
}

const Template = (args) => {
  return (
    <div style={{
      width: '320px',
      height: '420px'
    }}>
      <CardContentComponent {...args} />
    </div>
  )
}

export const CardContent = Template.bind({});
CardContent.args = {
  tagContent: 'Tag Highlight',
  headingContent: 'Heading',
  paragraphContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto asperiores ullam molestiae dolore, distinctio laborum minus minima eius nihil nesciunt odit quisquam ratione! Dignissimos exercitationem alias tempora. Quibusdam, temporibus?'
}
