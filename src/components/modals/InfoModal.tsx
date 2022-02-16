import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Come giocare" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Indovina una parola di 5 lettere in 6 tentativi.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Dopo ogni tentativo, i colori delle tessere cambiano
        per mostrarti quanto ci sei andato vicino.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" status="correct" />
        <Cell value="U" />
        <Cell value="F" />
        <Cell value="F" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La lettera B è nella parola ed è nel posto giusto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell value="A" />
        <Cell value="N" status="present" />
        <Cell value="T" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La lettera N è nella parola ma nel posto sbagliato
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" />
        <Cell value="A" />
        <Cell value="G" />
        <Cell value="H" status="absent" />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La lettera H non è nella parola.
      </p>
      <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
        Ogni giorno c'è una nuova parola da indovinare, la stessa per tutti.
      </p>
        
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Questa è una versione italiana ed open source (<a href="https://github.com/par-le/react-wordle" className="underline">qui il codice</a>)
        del gioco in inglese <a href="https://www.nytimes.com/games/wordle/index.html" className="underline font-bold">Wordle</a>
      </p>
    </BaseModal>
  )
}
