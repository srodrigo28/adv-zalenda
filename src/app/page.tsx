'use client'
import { Logo } from "@/components/logo";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect } from "react";
import { CiBag1 } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";
import { ItemText } from "@/components/ItemText/intext";
import { ItemBox } from "@/components/ItemBox";
import { motion } from "motion/react"


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
    <div className="flex flex-col w-screen relative">

      {/** ALTERAR O TELEFONE */}
      <a href="https://api.whatsapp.com/send?phone=5562998579084&text=Quero%20fazer%20um%20agendamento%20hoje!"
        target="_blank">
        <button className="z-50 fixed bottom-10 right-10 animate-pulse">
          <img src="./image/zap.png" className="w-80" alt="" />
        </button>
      </a>

      {/* 1 sessão pronto */}
      <section className="flex relative w-full">

        <div className="absolute top-2 md:top-10 left-10 z-10" data-aos="fade-down">
          <Logo />
        </div>

        {/* modificar */}
        <img src="./image/home.png" className="flex-1 relative" alt="" />
        <div className="home-item">
          <h2 className=" 
          text-white lg:text-6xl text-xl md:mb-28 bg-zinc-900/45 p-2 
          rounded-md lg:mt-44 mt-16 -ml-5 lg:ml-10 font-bold">JUROS ABUSIVOS </h2>

          <p className="lg:text-3xl text-[8px] -ml-3 lg:ml-10 text-start md:text-center bg-yellow-600 
          p-2 -pl-2 lg:pl-5 rounded-xl font-semibold"> Saiba se você está pagando juros abusivos <span className=" md:block hidden">ou taxas indevidas.</span> </p>
        </div>
      </section>

      {/* 2 sessão pronto */}
      <section className="flex flex-col items-center session-2 p-20 relative text-white"
        style={{
          backgroundImage: `url("./image/page2.png")`,
          width: '100%', height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
        }}>

        <div className="absolute top-10 left-10  z-10">
          <Logo />
        </div>

        <h2 className="text-xl lg:text-7xl mt-16 mb-16 w-[350px] ml-8 lg:w-[800px] md:text-start lg:text-center">Empréstimo com juros e taxas indevidas?</h2>

        <p className="text-md px-2 lg:text-2xl text-start md:text-center -ml-2 w-[320px] lg:w-[1200px]">
          Os bancos frequentemente aplicam taxas e juros abusivos em contratos de empréstimos e 
          financiamentos, e ainda incluem produtos indesejados sem o conhecimento do cliente.
          Revisar esses contratos pode recuperar valores pagos indevidamente e reduzir custos.
        </p>

        <p className="text-2xl mt-10 text-center lg:w-[1200px] hidden md:block">
          Acrescentar produtos ou serviços não solicitados nos contratos de empréstimos, configura prática abusiva conhecida como venda casada , proibida pelo Código de Defesa do Consumidor. Exemplos comuns incluem: Seguro Prestamista, Pacotes de Serviços Bancários, Títulos de Capitalização.
        </p>

      </section>

      {/* 3 sessão pronto */}
      <section className="flex flex-col relative">

        <div className="absolute top-10 left-10  z-10">
          <Logo />
        </div>

        <header className="flex flex-col bg-yellow-600 w-screen lg:h-[22vh] h-[20vh]">
          <h2 className="lg:text-5xl text-2xl font-bold ml-10 text-black mt-28">O que fazer?</h2>
        </header>

        <article className="flex flex-col md:flex-row gap-2 lg:px-44 bg-zinc-900 
        lg:w-screen h-[90vh] lg:h-[60vh] p-2 lg:p-10 md:0">
          
          <article className="flex-1 md:p-8 lg:mt-20 flex flex-col w-[350px] mx-auto items-center md:flex-col">
            <img className="self-center mt-10 lg:mt-1 item-p-1 mb-4 md:mr-5 lg:w-[100px] w-[70px]" src="image/icon-balanca.png" alt="" />
            
            <div className="border-t-2 mt-4 ">
              <h2 className="text-white mb-5">1º Passo</h2>
              
              <p className="text-white">Agenda uma consulta com nossos advogados especialistas e faça uma análise gratuita
                do seu contrato.</p>
            </div>

          </article>
          
          <article className="flex-1 md:p-8 lg:mt-20 flex flex-col w-[350px] mx-auto items-center md:flex-col">
          <img className="self-center mb-5 item-p-1 md:mr-5 lg:w-[100px] w-[70px]" src="image/icone-money.png" width={100} alt="" />
            <div className="border-t-2 mt-4">
              <h2 className="text-white mb-5">2º Passo</h2>
              <p className="text-white">Agenda uma consulta com nossos advogados especialistas e faça uma análise gratuita
                do seu contrato.</p>
            </div>
          </article>
          
          <article className="flex-1 md:p-8 lg:mt-20 flex flex-col w-[350px] mx-auto items-center md:flex-col">
          <img className="self-center item-p-1 mb-5 md:mr-5 lg:w-[100px] w-[70px]" src="image/icon-arrow.png" width={100} alt="" />
            
            <div className="border-t-2 mt-4">
            <h2 className="text-white mb-5">3º Passo</h2>
            <p className="text-white">Agenda uma consulta com nossos advogados especialistas e faça uma análise gratuita
              do seu contrato.</p>
            </div>
          </article>

        </article>
      </section>

      {/* 4 sessão pronto */}
      <section className="flex relative h-screen">

        <div className="flex-1 bg-yellow-600 flex flex-col justify-center px-5 items-center">
          <h1 className=" font-extrabold p-4 w-full text-black text-7xl text-center"> Efeitos da <br /> revisão: </h1>

          <div className="bg-white lg:w-[600px] p-5 text-black w-full rounded-2xl" >
            <p className="text-justify lg:text-2xl">A revisão de contratos de empréstimo
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
      <section className="flex flex-col relative h-[160vh] lg:h-screen bg-white">
        <div style={{
          backgroundImage: `url("./image/topo.png")`,
          width: '100%', height: '25vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
        }}>
          <h2 className="text-center text-white text-2xl mt-36 lg:mt-10 lg:text-6xl font-bold">Conheça nossos <br /> serviços</h2>

        </div>

        <div className="md:flex lg:mt-40 justify-evenly w-full m-2 text-black h-[75vh] pt-5 lg:p-10">

          <ItemBox icon={<CiBag1 size={100} className="w-14 lg:w-56" />} title="Mudar o titulo"
            items={[
              { conteudoText: "Defesa estratégica em execuções fiscais" },
              { conteudoText: "Recuperação eficaz de créditos" },
              { conteudoText: "Revisão e planejamento tributário" },
              { conteudoText: "Elaboração e análise de contratos" },
              { conteudoText: "Regularização e gestão imobiliária" },
            ]}
          />

          <ItemBox icon={<AiOutlineGlobal size={100} className="w-14 lg:w-44" /> } title="Mudar o titulo"
            items={[
              { conteudoText: "Defesa especializada em ações trabalhistas" },
              { conteudoText: "Gestão estratégica de riscos trabalhistas" },
              { conteudoText: "Acompanhamento técnico em perícias" },
            ]}
          />

          <ItemBox icon={<CiBag1 size={100} className="w-14 lg:w-44" />} title="Mudar o titulo"
            items={[
              { conteudoText: "Registro de marcas e patentes" },
              { conteudoText: "Obtenção de licenças e alvarás" },
              { conteudoText: "Assessoria em licitações e editais" },
              { conteudoText: "Defesa em processos ambientais" },
            ]}
          />

          <ItemBox icon={<AiOutlineGlobal size={100} className="w-14 lg:w-44" />} title="Mudar o titulo"
            items={[
              { conteudoText: "Benefícios de assistência social" },
              { conteudoText: "Previdência e planejamento financeiro" },
              { conteudoText: "Planos de saúde e cobertura médica" },
              { conteudoText: "Defesa em processos administrativos" },
            ]}
          />
        </div>

      </section>

      {/* 6 sessão  */}
      <section className="flex relative  h-[230vh] w-full lg:h-[100vh] " style={{
          backgroundImage: `url("./image/perfil-page.png")`,
          width: '100', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
        }}>     
        
        <div className="absolute top-10 left-10  z-10">
            <Logo />
        </div>

        <div className="flex flex-col lg:flex-row w-screen">

          <div className=" lg:w-[35%] mt-96 lg:mt-2 lg:ml-44 w-[90%] mx-auto flex flex-col h-96 relative">
            <img src="./image/perfil.png" alt="" className="lg:mt-64 lg:ml-44 w-[400px]"/>
            <h2 className="text-zinc-50 bg-zinc-950/50 p-2 px-5 rounded-md lg:text-3xl text-2xl font-bold mt-96 lg:ml-64 ml-28 absolute lg:top-72 ">
              Iago Zalenda
            </h2>
          </div>

          <div className=" lg:w-[700px] w-[100%] lg:h-[600px] text-white lg:mt-44 animate-pulse 
            bg-slate-900 mt-52 mr-20 p-10 flex flex-col gap-5 rounded-lg lg:mr-64">
            <p> O escritório ZALENDA ADVOGADOS, é uma sociedade de advogados, sediado em Porto Velho-RO, com atuação On-line em Todo o Território Nacional, através de parcerias estratégicas. </p>
            <p> Toda a jornada iniciou em 2015, por seu sócio fundador Iágo Zalenda, que após iniciar sua militância junto a grandes e renomados escritórios, adquirindo vasta Experiência, decidiu por dar continuidade a sua via Empreendedora, e que hoje, no escritório, conta com uma equipe de respeitados profissionais, e atuação ativa e especializada em prol dos interesses de seus clientes . </p>
            <p> O sócio fundador, Iágo Zalenda, acumulou experiência significativa no mercado financeiro, participando em instituições renomadas. Essa trajetória confere-lhe um profundo conhecimento em operações bancárias e no atendimento às demandas de empresas de diversos setores. Sua expertise no Direito Bancário fortalece o posicionamento do escritório em questões relacionadas às instituições financeiras, agronegócio, setores e comércio. </p>
            <p> Com estrutura robusta e tecnologia de ponta, o Zalenda Advogados presta serviços jurídicos de alta qualidade em todo o Brasil, otimizando tempo e custos para seus clientes. Nosso compromisso com a ética, a cooperação e a confiabilidade é o que nos diferencia e consolida como referência na advocacia empresarial e bancária. </p>
          </div>

        </div>

      </section>

      {/* 7 sessão Contato  */}
      <section className="flex items-center lg:h-[100vh]">

        <div className="items-center justify-start lg:flex hidden"
          style={{
            backgroundImage: `url("./image/contato-left.png")`,
            width: '100%', height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
          }}>

          <h2 className="text-black text-8xl font-bold lg:mt-[260px] lg:ml-96">Contato</h2>

        </div>


        <div className="flex p-20 lg:w-[50%] w-[100%]"
          style={{
            backgroundImage: `url("./image/contato-right.png")`,
            height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
          }}>

          <div className="p-10">
            <h3 className="text-6xl font-bold -ml-16 block lg:hidden">Contato</h3>
            
            <div className="row mb-4 pt-12 -ml-10">
              <h3 className="font-bold text-black text-4xl">E-mail</h3>
              <p className="text-black text-xl">zalendaadvogados@gmail.com</p>
            </div>

            <div className="row mb-4 -ml-10">
              <h3 className="font-bold text-black text-4xl">Redes sociais</h3>
              <p className="text-black text-xl">@zalenda.advogados</p>
            </div>

            <div className="row -ml-10">
              <h3 className="font-bold text-black text-4xl">Telefone</h3>
              <p className="text-black text-xl">(69)99268-2118</p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
