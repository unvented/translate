## @unvented/translate

### Installation

```bash
npm i @unvented/translate
```

### Usage

```jsonc
// de.json
{
  "welcomeMessage": "Hallo {name}"
}
```

```jsonc
// en.json
{
  "welcomeMessage": "Hello {name}"
}
```

```ts
import { useTranslate } from '@unvented/translate'
import de from './de.json'
import en from './en.json'

const translate = useTranslate({ de, en }, 'de', 'en')

, translation = translate('welcomeMessage', { name: 'Samuel' }) // Hallo Samuel
```

### Structure

```tsc
declare const useTranslate(locales: { [key: string]: object }, currentLocale: string, fallbackLocale: string)
```
