import { defaultOverrides } from "next/dist/server/require-hook";

function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
  }
  function Tabla(){
    return(
      <table>
        <th>Tabla de ejemplo</th>
        <tr>Es una columna</tr>
      </table>
    );
  }

  export function Botton(){
    return{
      <button></button>
    )
  };

  export default function Components(){
    return (
        <section>
            <Profile/>
            <Tabla/>
        </section>
    );
  }