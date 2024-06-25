import './App.css'
import Casilla from "./components/Casilla.tsx";
import {useState} from "react";

function App() {
    const [display, setDisplay] = useState('');
    const [operator, setOperator] = useState<string | null>(null);
    const [operand, setOperand] = useState<number | null>(null);

    const handleClick = (value: string) => {
        if (value === 'C') {
            setDisplay('');
            setOperator(null);
            setOperand(null);
        } else if (value === 'Del') {
            setDisplay(display.slice(0, -1));
        } else if (['+', '-', '×', '÷'].includes(value)) {
            setOperator(value);
            setOperand(parseFloat(display));
            setDisplay('');
        } else if (value === '=') {
            if (operator && operand !== null) {
                switch (operator) {
                    case '+':
                        setDisplay((operand + parseFloat(display)).toString());
                        break;
                    case '-':
                        setDisplay((operand - parseFloat(display)).toString());
                        break;
                    case '×':
                        setDisplay((operand * parseFloat(display)).toString());
                        break;
                    case '÷':
                        setDisplay((operand / parseFloat(display)).toString());
                        break;
                }
                setOperator(null);
                setOperand(null);
            }
        } else {
            setDisplay(display + value);
        }
    };

    return (
    <>
        <div className="flex justify-center">
            <div className="bg-violet-950 w-full h-screen ">
                <div className="flex flex-col h-full">
                    <div className="bg-sky-950 basis-1/4 text-4xl text-white text-end">
                        <p className='text-xl opacity-50
                           sm:text-2xl
                           md:text-3xl
                           lg:text-4xl
                           xl:text-5xl'>{(operand ?? '') + (operator ?? '')}</p>
                        <p className='
                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                            xl:text-6xl'>{display}</p>
                    </div>
                    <div className="grid gap-1 grid-rows-5 grid-cols-4 bg-sky-950 basis-9/12
                                   sm:gap-1
                                   md:gap-1.5
                                   lg:gap-2
                                    ">
                        <Casilla handleClick={handleClick} resaltado={true} style="col-start-1 col-end-3">C</Casilla>
                        <Casilla handleClick={handleClick} resaltado={true} >Del</Casilla>
                        <Casilla handleClick={handleClick} resaltado={true} style="col-start-4 col-end-5" >÷</Casilla>
                        <Casilla handleClick={handleClick} resaltado={true} style="row-start-2 row-end-3 col-start-4 col-end-5">×</Casilla>
                        <Casilla handleClick={handleClick} resaltado={true} style="row-start-3 row-end-4 col-start-4 col-end-5">-</Casilla>
                        <Casilla handleClick={handleClick} resaltado={true} style="row-start-4 row-end-5 col-start-4 col-end-5">+</Casilla>
                        <Casilla handleClick={handleClick} resaltado={true} style="row-start-5 row-end-6 col-start-3 col-end-5" >=</Casilla>
                        <Casilla handleClick={handleClick}>7</Casilla>
                        <Casilla handleClick={handleClick}>8</Casilla>
                        <Casilla handleClick={handleClick}>9</Casilla>
                        <Casilla handleClick={handleClick}>4</Casilla>
                        <Casilla handleClick={handleClick}>5</Casilla>
                        <Casilla handleClick={handleClick}>6</Casilla>
                        <Casilla handleClick={handleClick}>1</Casilla>
                        <Casilla handleClick={handleClick}>2</Casilla>
                        <Casilla handleClick={handleClick}>3</Casilla>
                        <Casilla handleClick={handleClick} style="">.</Casilla>
                        <Casilla handleClick={handleClick} style="">0</Casilla>

                    </div>
                </div>
            </div>
        </div>

    </>
    )
}

export default App
