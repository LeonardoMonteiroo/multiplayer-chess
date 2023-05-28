import { useTranslation } from 'react-i18next'
import { GlobeHemisphereWest } from 'phosphor-react'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const handleChangeLanguage = (selectedLanguage: string) => {
    i18n.changeLanguage(selectedLanguage)
  }

  return (
    <div className="flex justify-center items-center">
      <GlobeHemisphereWest />
      <select
        className="bg-color-dark-blue"
        onChange={(e) => handleChangeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    </div>
  )
}
