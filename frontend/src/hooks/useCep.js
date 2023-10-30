import axios from "axios";
import { useCallback, useState } from "react"

const useCep = (cep) => {
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const handleRequest = useCallback(async () => {

        if (cep.length != 8)
            return;

        const response = (await axios.get(`https://viacep.com.br/ws/${cep}/json`)).data;

        setRua(response.logradouro);
        setBairro(response.bairro);
        setCidade(response.localidade);
        setEstado(response.uf);
    }, [cep])

    return { rua, bairro, cidade, estado, handleRequest };
};

export default useCep;