import { useTranslate } from '../src'
import de from './de.json'
import en from './en.json'

test('useTranslate', () => {
  const translate = useTranslate({ de, en }, 'de', 'en')

  expect(translate('welcomeMessage', { name: 'unvented' })).toBe('Hallo unvented')

  expect(translate('a.very.deep.translation')).toBe('Irgendwas')

  expect(translate('a.deep.nonexistent.translation')).toBe('')

  expect(translate('a.deep.fallback.translation')).toBe('Whatever')
})
