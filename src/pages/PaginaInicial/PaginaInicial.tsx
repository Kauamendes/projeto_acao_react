import React, { useState } from "react";
import AcaoComponent from "../../components/AcaoComponent";
import { Form, Alert } from "react-bootstrap";

const PaginaInicial = () => {
  const [codigoAcao, setCodigoAcao] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputCodigo = event.target.value.toUpperCase();
    // Verifica se o código de ação tem um dos formatos especificados
    if (/^[A-Z]{4}[0-9]+$/.test(inputCodigo)) {
      setCodigoAcao(inputCodigo);
      setError(null); // Limpa a mensagem de erro se o código for válido
    } else {
      setCodigoAcao(inputCodigo);
      setError("Código de ação inválido. Por favor, insira um código válido.");
    }
  };

  return (
    <div className="pagina-inicial">
      <div className="acao-input">
        <Form.Label><b>Código da Ação:</b></Form.Label>
        <Form.Control style={{ width: "650px" }}
          size="lg"
          placeholder="Digite o código da ação (Exemplo: PETR4, BOVA11)"
          type="text"
          value={codigoAcao}
          onChange={handleChange}
        />
        {error && <Alert variant="danger">{error}</Alert>}
      </div>
      {codigoAcao && !error && <AcaoComponent codigo={codigoAcao} />}
    </div>
  );
};

export default PaginaInicial;