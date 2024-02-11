import { useState } from "react";
import { marcas } from "../../components/Carrossel"
import './Cadastrar.scss';
import { useEffect } from "react";

const Register = () => {
    const [marca, setMarca] = useState()
    const [modelo, setModelo] = useState()
    const [produto, setProduto] = useState([])
    const [errors, setErrors] = useState()
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const produtosSalvos = JSON.parse(localStorage.getItem('produtos'))
        if(produtosSalvos) {
            setProduto(produtosSalvos)
        }
    }, [])
    

    const onSave = (e) => {
        e.preventDefault()
        setSubmitted(true)
        if(!modelo ) {
            setErrors('Preecha o campo modelo')
            return;
        }
        if(!marca) {
            setErrors('Selecione uma marca')
            return;
        }
        const newProduto = { modelo, marca }
        setProduto((prevProduto)=> [...prevProduto, newProduto])
        localStorage.setItem('produtos', JSON.stringify([...produto, newProduto]))
        setModelo('')
        setMarca('')
        setErrors('')
    }

    const deleteProduto = (index, e) => {
        e.preventDefault()
        setSubmitted(false)
        setErrors('')
        const updatedProdutos = [...produto]
        updatedProdutos.splice(index, 1) //tira fora produtos na posicao index, 1 é a quantidade de registros para deletar depois do index
        setProduto(updatedProdutos)
        localStorage.setItem('produtos',JSON.stringify(updatedProdutos))
    }
  return (
    <div className="cadastrar">
        <div className="container">
            <h2 className="text-center mt-2">Cadastrar</h2>
            <form onSubmit={onSave}>
            <div className="mb-3">
                    <label className="form-label fs-5">Modelo</label>
                    <input 
                        type="text" 
                        className="form-control fs-5" 
                        value={modelo} 
                        onChange={(e)=>setModelo(e.target.value)}    
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label fs-5">Marca</label>
                    <select 
                        className="form-select text-center" 
                        value={marca}
                        onChange={(e)=>setMarca(e.target.value)}
                    >
                        <option value="">Selecione uma opção</option>
                        {
                            marcas.map(item => 
                                <option value={item}>{item.toUpperCase()}</option>
                            )
                        }
                    </select>
                </div>
                <button className="btn-cadastrar">Cadastrar</button>
                {submitted && 
                    <div className={`my-4 p-3 fs-4 ${errors ? 'text-bg-danger' : 'text-bg-success'} rounded-4`}>{errors ? errors : 'Cadastrado com Sucesso!'}</div> 
                }
                <div className="py-3 my-5 rounded-4 produtos-cadastrados">
                    <h3>Produtos cadastrados</h3>
                    {
                        produto.map((item, index)=> 
                            <div className="text-start mx-3 mb-2 fs-5 d-flex">
                                <button className="p-1 me-2 btn btn-light" onClick={(e)=> deleteProduto(index, e)}>
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </button>
                                <div className="me-2 p-1">
                                {`${index +1}-`}
                                </div>
                                <div className="me-2 flex-grow-1 w-50">
                                {`${item.modelo} -`}
                                </div>
                                <div className="flex-grow-1 w-50 text-start me-2">
                                {`${item.marca} `}
                                </div>
                            </div>
                        )
                    }
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register