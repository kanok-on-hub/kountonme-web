import { type SchemaTypeDefinition } from 'sanity'
import { heroType } from './heroType'
import { problemType } from './problemType'
import { philosophyType } from './philosophyType'
import { workforceType } from './workforceType'
import { howItWorksType } from './howItWorksType'
import { useCaseType } from './useCaseType'
import { ctaType } from './ctaType'
import { faqType } from './faqType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroType, problemType, philosophyType, workforceType, 
    howItWorksType, useCaseType, ctaType, faqType
  ],
}