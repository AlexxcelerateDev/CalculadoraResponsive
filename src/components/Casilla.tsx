

export default function Casilla({children, style, resaltado, handleClick}: {children: string,style?: string, resaltado?: boolean, handleClick: (value: string) => void}) {

    return (
      <button
          onClick={() => handleClick(children)}
          className={(resaltado ? 'bg-sky-800 hover:bg-sky-900 active:bg-sky-700' : 'bg-sky-600 hover:bg-sky-700 active:bg-sky-500') + ` font-bold text-white text-4xl rounded-xl
                           transition-colors duration-200 ease-in-out
                           sm:text-5xl
                           md:text-6xl
                           lg:text-7xl
                           xl:text-7xl
                           ${style}`}>
          {children}
      </button>
    );
}