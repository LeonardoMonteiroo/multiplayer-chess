import logo from '../assets/black-pawn.svg'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { House, Play } from 'phosphor-react'
import Button from './Button'

export default function Sidebar() {
  const { t } = useTranslation()

  return (
    <div className="bg-color-dark-blue h-full w-48 text-color-board-white flex flex-col justify-between items-center gap-3 p-3">
      <div className="flex justify-center items-center gap-1">
        <img src={logo} alt="peão preto" />
        <span className="font-bold text-2xl">{t('general.site_name')}</span>
      </div>

      <div className="flex-grow justify-center items-center">
        <div className="grid grid-cols-1/3-2/3 gap-x-2 gap-y-3 justify-items-center items-center">
          <House size={32} weight="bold" />
          <span className="font-bold text-xl w-full text-center">
            {t('menu.home')}
          </span>
          <Play size={32} weight="bold" />
          <span className="font-bold text-xl w-full text-center">
            {t('menu.play')}
          </span>
        </div>
      </div>

      <Button text={t('menu.sign_up')} />
      <Button text={t('menu.login')} />

      <LanguageSwitcher />
    </div>
  )
}
