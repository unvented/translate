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

const translate = useTranslate({ de, en }, '<currentLocale>' /* e.g. 'de' */, '<fallbackLocale>' /* e.g. 'en' */)

, translation = translate('welcomeMessage', { name: 'Samuel' }) // Hallo Samuel

export default () => (
  <Translation.Provider value={{ locale, setLocale }}>
    <Component />
  </Translation.Provider>
)
```
