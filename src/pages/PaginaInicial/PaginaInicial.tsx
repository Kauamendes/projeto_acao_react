import React, { useState } from "react";
import AcaoComponent from "../../components/AcaoComponent";
import B3Logo from "../../assets/B3.png";
import { Form, Alert } from "react-bootstrap";

const PaginaInicial = () => {
  const [codigoAcao, setCodigoAcao] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputCodigo = event.target.value.toUpperCase();
    if (/^[A-Z]{4}[0-9]+$/.test(inputCodigo)) {
      setCodigoAcao(inputCodigo);
      setError(null);
    } else {
      setCodigoAcao(inputCodigo);
      setError("Código de ação inválido. Por favor, insira um código válido.");
    }
  };

  return (
    <div className="pagina-inicial">
      <img src={B3Logo} alt="Logo B3" style={{ width: "600px", borderRadius: "5px", marginBottom: "100px" }} />
      <div className="acao-input">
        <Form.Label><b>Código da Ação:</b></Form.Label>
        <Form.Control style={{ width: "800px" }}
          size="lg"
          placeholder="Digite o código da ação (Exemplo: PETR4, BOVA11)"
          type="text"
          value={codigoAcao}
          onChange={handleChange}
        />
        {error && <Alert variant="danger">{error}</Alert>}
      </div>
      {codigoAcao && !error && <AcaoComponent symbol={codigoAcao} />}
    </div>
  );
};

export default PaginaInicial;