import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { SocialFollow } from '../social/SocialFollow'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Medical Words" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Indovina ogni giorno termini ed acronimi medici di 5 lettere in 6 tentativi.
      </p>

      <h2 className="mt-4 dark:text-white">Come Giocare:</h2>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        Dopo ogni tentativo, i colori delle tessere cambiano
        per mostrarti quanto ci sei andato vicino.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="F" status="correct" />
        <Cell value="L" />
        <Cell value="E" />
        <Cell value="B" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La lettera F è nella parola ed è nel posto giusto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="L" />
        <Cell value="I" />
        <Cell value="N" status="present" />
        <Cell value="F" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La lettera N è nella parola ma nel posto sbagliato
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell value="R" />
        <Cell value="O" />
        <Cell value="H" status="absent" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La lettera H non è nella parola.
      </p>
      <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
        Ogni giorno c'è una nuova parola da indovinare, la stessa per tutti.
      </p>

      <p className="mt-4 italic text-sm text-gray-500 dark:text-gray-300">
        Medical Words è una versione personalizzata per <a href="https://womeninsurgeryitalia.it/" className="underline font-bold" target="_blank">Women in Surgery Italia</a>&nbsp;
        ed <a href="https://github.com/par-le/react-wordle" className="underline" target="_blank">open source</a> del gioco
        in inglese <a href="https://www.nytimes.com/games/wordle/index.html" className="underline font-bold" target="_blank">Wordle</a>
      </p>

      <p className="mt-4 italic text-sm text-gray-500 dark:text-gray-300">
      Condividi la soluzione con gli amici e sui nostri canali social...<br/>
      <SocialFollow />
      </p>
    </BaseModal>
  )
}
