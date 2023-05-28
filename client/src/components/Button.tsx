interface ButtonProps {
  text: string
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="bg-color-board-white text-color-dark-blue py-2 w-40 rounded-lg">
      {text}
    </button>
  )
}
