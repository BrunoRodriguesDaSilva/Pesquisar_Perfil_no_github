import { useEffect, useState } from "react"

const Formulario = () => {
    let [materiaA, setMateriaA] = useState (0);
    let [materiaB, setMateriaB] = useState (0);
    let [materiaC, setMateriaC] = useState (0);

    useEffect(() => {
        console.log('O estado mudou')
    });

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Voce foi aprovado</p>
            )
        } else {
            return (
                <p>voce não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <input type="number" placeholder="Nota Matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota Matéria B" onChange={e => setMateriaB(parseInt(e.target.value))} />
            <input type="number" placeholder="Nota Matéria C" onChange={e => setMateriaC(parseInt(e.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario