import React, { useEffect, useState } from "react";
import { getAcaoPorCodigo } from "../services/B3Api";
import { AcaoProps } from "../interfaces/AcaoProps";

const AcaoComponent: React.FC<AcaoProps> = ({ codigo }) => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean | null>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let timer: any;

    const fetchData = async () => {
      try {
        const response:any = await Promise.race([
          getAcaoPorCodigo(codigo),
          new Promise((_resolve, reject) => {
            timer = setTimeout(() => {
              reject(new Error("Tempo limite excedido (5 segundos)"));
            }, 15000); // Definindo 10 segundos como limite
          }),
        ]);

        clearTimeout(timer); // Limpa o temporizador se a resposta for recebida dentro do limite de tempo
        setData(response.data);
        setLoading(false);
      } catch (err:any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();

    return () => clearTimeout(timer); // Limpa o temporizador se o componente for desmontado antes do tempo limite
  }, [codigo]);

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <img src={data?.logourl} alt={data?.shortName} style={{ width: "200px", borderRadius: "5px", marginBottom: "10px" }} />
      <ul style={{ listStyleType: "none", padding: 0, textAlign: "center" }}>
        <li>
          <strong>Nome:</strong> {data?.shortName}
        </li>
        <li>
          <strong>Moeda:</strong> {data?.currency}
        </li>
        <li>
          <strong>Preço:</strong> {data?.regularMarketPrice} R$
        </li>
      </ul>
    </div>
  );
};

export default AcaoComponent;