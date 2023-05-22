import { Container } from "./styles";
 import { BsPencil } from "react-icons/bs";
import { api } from "../../services/api";
import { ButtonTransparent } from "../ButtonTransparent";
import { useNavigate } from "react-router-dom";

export function AdminCard({title, image, id, description, price , ...rest}) {

  const navigate = useNavigate()

  function handleEdit() {
    navigate(`/edit/${id}`)
  }

  async function handleDelete() {
    try{

      const sure = window.confirm("Deseja mesmo excluir esse prato ?")

      if(sure){
        await api.delete(`/dishes/${id}`)
        alert("Prato deletado.")

      }

      return navigate("/")

    } catch {
      return alert("Erro, favor tentar novamente.")
    }

  }

  return (
    <Container>
      <ButtonTransparent
        Icon={BsPencil}
        className='icon'
        iconSize={20}
        iconColor='white'
        onClick={handleEdit}
      />

      <div>
        <img src={`${api.defaults.baseURL}/dishes/${image}`} alt="dish image" />
        <div className="informations">
        <ButtonTransparent
        className="name"
        title={title}
        onClick={ handleDelete}
        />
        <span>{description}</span>
        <h2>R$ {price}</h2>
        </div>
      </div>
    </Container>
  )
}