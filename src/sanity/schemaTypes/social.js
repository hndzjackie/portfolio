import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const social = defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Platform of social media',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
    }),
  ],
})
