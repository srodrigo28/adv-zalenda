'use client'
import { Logo } from "@/components/logo";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect } from "react";
import { CiBag1 } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";
import { ItemText } from "@/components/ItemText/intext";
import { ItemBox } from "@/components/ItemBox";

export default function Home() {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".home-item", {
      x: -10,
      opacity: 1,
      duration: 3
    })
    return () => {
      gsap.killTweensOf(".home-item")
    }
  }, [])
  return (
    <div className="flex flex-col w-screen">

      {/* 1 sessão pronto */}
      <section className="flex relative">

        <div className="absolute top-10 left-10  z-10">
          <Logo />
        </div>

        {/* modificar */}
        <img src="./image/home.png" className="flex-1 relative" alt="" />
        <div className="home-item">
          <h2 className="text-white md:text-6xl text-3xl font-bold md:mb-28">JUROS ABUSIVOS </h2>

          <p className="md:text-xl text-sm text-center  bg-yellow-600 p-2 rounded-xl font-semibold px-5">  Saiba se você está pagando juros abusivos ou taxas indevidas. </p>
        </div>
      </section>

      {/* 2 sessão pronto */}
      <section className="flex flex-col items-center session-2 p-20 relative"
        style={{
          backgroundImage: `url("./image/page2.png")`,
          width: '100%', height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
        }}>

        <div className="absolute top-10 left-10  z-10">
          <Logo />
        </div>

        <h2 className="text-6xl mt-16 mb-16">Empréstimo com juros e taxas indevidas?</h2>

        <p className="text-2xl text-center">
          Os bancos frequentemente aplicam taxas e juros abusivos em contratos de empréstimos e financiamentos, e ainda incluem produtos indesejados sem o conhecimento do cliente.
          Revisar esses contratos pode recuperar valores pagos indevidamente e reduzir custos.
        </p>

        <p className="text-2xl mt-10 text-center">
          Acrescentar produtos ou serviços não solicitados nos contratos de empréstimos, configura prática abusiva conhecida como venda casada , proibida pelo Código de Defesa do Consumidor. Exemplos comuns incluem: Seguro Prestamista, Pacotes de Serviços Bancários, Títulos de Capitalização.
        </p>

      </section>

      {/* 3 sessão pronto */}
      <section className="flex flex-col relative">

        <div className="absolute top-10 left-10  z-10">
          <Logo />
        </div>

        <header className="flex flex-col bg-yellow-600 w-screen h-[30vh]">
          <h2 className="text-5xl font-bold ml-10 text-black mt-28">O que fazer?</h2>
        </header>

        <article className="flex flex-col items-center md:flex-row gap-2 bg-zinc-900 w-screen h-[80vh] p-10 md:0">
          <article className="flex-1 md:p-8 flex items-center md:flex-col">
            <img className="self-center item-p-1 md:mr-5" src="image/icon-balanca.png" width={100} alt="" />
            <h2 className="text-white mb-5">1º Passo</h2>
            <p className="text-white">Agenda uma consulta com nossos advogados especialistas e faça uma análise gratuita
              do seu contrato.</p>

          </article>
          <article className="flex-1 md:p-8 items-center flex md:flex-col bg-zinc-900">
            <img className="self-center item-p-2" src="image/icone-money.png" width={100} alt="" />
            <h2 className="text-white mb-5">2º Passo</h2>
            <p className="text-white">Agenda uma consulta com nossos advogados especialistas e faça uma análise gratuita
              do seu contrato.</p>
          </article>
          <article className="flex-1 md:p-8 items-center flex md:flex-col bg-zinc-900">
            <img className="self-center item-p-3" src="image/icon-arrow.png" width={100} alt="" />
            <h2 className="text-white mb-5">3º Passo</h2>
            <p className="text-white">Agenda uma consulta com nossos advogados especialistas e faça uma análise gratuita
              do seu contrato.</p>
          </article>
        </article>
      </section>

      {/* 4 sessão pronto */}
      <section className="flex relative h-screen">

        <div className="flex-1 bg-yellow-600 flex flex-col justify-center items-center">
          <h1 className=" font-extrabold p-4 w-full text-black text-7xl text-center"> Efeitos da <br /> revisão: </h1>

          <div className="bg-white p-5 text-black w-96 rounded-2xl" >
            <p className="text-justify">A revisão de contratos de empréstimo
              consiste em uma análise minuciosa
              das cláusulas contratuais, buscando
              identificar e corrigir eventuais
              irregularidades e ilegalidades que
              gerem onerosidade excessiva ao
              devedor, seja ele pessoa física ou
              jurídica. Esse procedimento tem como
              objetivo reequilibrar a relação
              contratual entre as partes, garantindo
              que os termos do empréstimo estejam
              de acordo com a lei e com os princípios
              da boa-fé e da justiça contratual.
            </p>
          </div>
        </div>

        <div className="bg-black flex-1">
          <div className="absolute top-10 left-10  z-10">
            <Logo />
          </div>

          <ItemText conteudo="Redução do saldo devedor." />
          <ItemText conteudo="Diminuição do valor das parcelas." />
          <ItemText conteudo="Restituição de valores pagos a maior, em dobro, com correção e juros." />
          <ItemText conteudo="Anulação de cláusulas abusivas." />
          <ItemText conteudo="Renegociação do contrato em condições mais justas." />
          <ItemText conteudo="É possível realizar a revisão mesmo que você esteja com parcelas em atraso e estiver sendo
                cobrado administrativamente ou judicialmente pelo banco." />

          <div>
            <p> Agende uma consulta para saber mais. </p>
          </div>
        </div>


      </section>

      {/* 5 sessão pronto */}  
      <section className="flex flex-col relative h-screen bg-white">
        <div style={{
          backgroundImage: `url("./image/topo.png")`,
          width: '100%', height: '25vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
        }}></div>

        <div className="flex justify-evenly w-full m-2 text-black h-[75vh] pt-10">

          <ItemBox icon={<CiBag1 size={100} />} title="Mudar o titulo"
            items={[
              { conteudoText: "Defesa estratégica em execuções fiscais" },
              { conteudoText: "Recuperação eficaz de créditos" },
              { conteudoText: "Revisão e planejamento tributário" },
              { conteudoText: "Elaboração e análise de contratos" },
              { conteudoText: "Regularização e gestão imobiliária" },
            ]}
          />

          <ItemBox icon={<AiOutlineGlobal size={100} />} title="Mudar o titulo"
            items={[
              { conteudoText: "Defesa especializada em ações trabalhistas" },
              { conteudoText: "Gestão estratégica de riscos trabalhistas" },
              { conteudoText: "Acompanhamento técnico em perícias" },
            ]}
          />

          <ItemBox icon={<CiBag1 size={100} />} title="Mudar o titulo"
            items={[
              { conteudoText: "Registro de marcas e patentes" },
              { conteudoText: "Obtenção de licenças e alvarás" },
              { conteudoText: "Assessoria em licitações e editais" },
              { conteudoText: "Defesa em processos ambientais" },
            ]}
          />

          <ItemBox icon={<AiOutlineGlobal size={100} />} title="Mudar o titulo"
            items={[
              { conteudoText: "Benefícios de assistência social" },
              { conteudoText: "Previdência e planejamento financeiro" },
              { conteudoText: "Planos de saúde e cobertura médica" },
              { conteudoText: "Defesa em processos administrativos" },
            ]}
          />
        </div>

      </section>

      {/* 6 sessão pronto */}
      <section className="flex relative h-screen">     

        <div className="absolute top-10 left-10  z-10">
            <Logo />
        </div>

      </section>

      {/* 7 sessão pronto */}
      <section className="flex items-center">

        <div className="flex items-center justify-start"
          style={{
            backgroundImage: `url("./image/contato-left.png")`,
            width: '100%', height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
          }}>

          <h2 className="text-black text-8xl font-bold mt-96 ml-40">Contato</h2>

        </div>


        <div className="flex p-20"
          style={{
            backgroundImage: `url("./image/contato-right.png")`,
            width: '50%', height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
          }}>

          <div className="p-10">
            <div className="row mb-4 pt-12">
              <h3 className="font-bold text-black text-4xl">E-mail</h3>
              <p className="text-black text-xl">zalendaadvogados@gmail.com</p>
            </div>

            <div className="row mb-4">
              <h3 className="font-bold text-black text-4xl">Redes sociais</h3>
              <p className="text-black text-xl">@zalenda.advogados</p>
            </div>

            <div className="row">
              <h3 className="font-bold text-black text-4xl">Telefone</h3>
              <p className="text-black text-xl">(69)99268-2118</p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
