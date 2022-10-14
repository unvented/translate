export const useTranslate = (
  locales: { [key: string]: object },
  currentLocale: string,
  fallbackLocale: string
) => {
  return (key: string, variables?: { [key: string]: string }) => {
    const localeObject = locales[currentLocale] as { [key: string]: string | undefined }

    let translation: string | undefined

    if (key.includes('.')) {
      for (const i of key.split('.')) {
        if (typeof translation === 'string' || !translation && !localeObject[i]) break
    
        translation = translation ? translation[i] : localeObject[i]
    
        if (!translation) break
      }
    
      if (!translation) {
        for (const i of key.split('.')) {
          if (typeof translation === 'string') break
  
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          translation = translation ? translation[i] : locales[fallbackLocale][i]
        }
      }
    } else {
      translation = localeObject[key]
    
      if (!translation)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        translation = locales[fallbackLocale][key]
    }

    if (!translation)
      return ''

    if (variables)
      for (const property in variables)
        translation = translation.replaceAll(`{${property}}`, variables[property])

    return translation
  }
}
