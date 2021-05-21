import React from "react";
import DoggoCard from "../components/DoggoCard";

function OurDoggos() {
  return (
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
          <DoggoCard
            imageUrl={"./images/our-doggos/chucho.jpeg"}
            title="Chucho"
            text="bebe no se si hablas mucho español,
             si entiendes cuando digo mi amor, solo tenemos que gustarnos"
          />
          <DoggoCard
            imageUrl={"./images/our-doggos/chicho.jpeg"}
            title="Chicho"
            text="dime ya por que? dime por que te fuiste
            dimelo bebe, por que no me llamas? es que no 
            me estrañas bebe"
          />
          <DoggoCard
            imageUrl={"./images/our-doggos/tocino.jpeg"}
            title="Chewbarka"
            text="te voy a dejar mi numero, solo tienes que llamar
            cuando me heches de menos"
          />
          <DoggoCard
            imageUrl={"./images/our-doggos/chucho1.jpeg"}
            title="Nacho"
            text="la nena es de otra ciudad pero le corre mi flow
            no nos tenemos que hablar, solo sentirnos"
          />
          <DoggoCard
            imageUrl={"./images/our-doggos/doggoadop.jpeg"}
            title="Justin"
            text="you know sometimes i think about it, 
            you regret it now, but is no mistake
            one day youll love me again"
          />
          <DoggoCard
            imageUrl={"./images/our-doggos/doggoadope.jpeg"}
            title="lil Wayner"
            text="no quiere saber de compromiso, puesta pa romper la carretera"
          />
          <DoggoCard
            imageUrl={"./images/our-doggos/doggoadopit.jpeg"}
            title="El Drake"
            text="todos estan pendiente a ti, pero tu puesta pa mi
            por que todos te quieren, lo que no saben es que hoy 
            yo te voy a buscar"
          />
          <DoggoCard
            imageUrl={"./images/our-doggos/doggobab.jpeg"}
            title="Mia"
            text="you used to call me on my cell phone
            late night when you need my love"
          />
          <DoggoCard
            imageUrl={"./images/our-doggos/doggobae.jpeg"}
            title="Didi"
            text="i know when the eyeline bling
            it can only mean one thing"
          />
          <DoggoCard
            imageUrl={"./images/our-doggos/doggobas.jpeg"}
            title="Sia"
            text="el sol esta que quema
            le dije baby que paso, vamos al agua que hace calor"
          />
          <DoggoCard
            imageUrl={"./images/our-doggos/doggobaa.jpeg"}
            title="Sorba"
            text="Why are you alone, when you could be with me"
          />
          <DoggoCard
            imageUrl={"./images/our-doggos/leonel.jpeg"}
            title="Mia"
            text="por lo que me cuentas no se ha dado cuenta
            que te va a perder, si te falta alquien que juegue contigo,
            si te falta alguien que sirva de pretexto
            esta noche yo me ofrezco"
          />
        </div>
      </div>
    </div>
  );
}

export default OurDoggos;
