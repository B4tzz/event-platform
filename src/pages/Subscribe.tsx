import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Logo } from "../components/Logo";
import CodeMockup from '../assets/code-mockup.png'
import { useCreateSubscriberMutationMutation } from "../graphql/generated";

export function Subscribe() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutationMutation();

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email
      }
    });

    navigate('/event');
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="bg-reactIcon bg-no-repeat bg-top">
        <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
          <div className="max-w-[650px]">
            <Logo />

            <h1 className="mt-8 text-[2.5rem] leading-tight">
              Construção de uma{" "}
              <strong className="text-blue-500">aplicação completa</strong>, do
              zero, com <strong className="text-blue-500">React, GraphQL, GraphCMS e TailwindCSS</strong>
            </h1>

            <p className="mt-4 text-gray-200 leading-relaxed">
              Este projeto demonstra a utilização de alguns conceitos do React e algumas bibliotecas muito poderosas que podem agregar muito valor para os projetos. 
              GraphQL otimizando a forma em que o front-end consome as informações, o TailwindCSS acelarando a forma de estilizar os componentes e o GraphCMS melhorando a gestão de conteúdo.
            </p>
            <p className="text-red-600 text-sm mt-2">*Este é um projeto de portifólio, os conteúdos deste projeto são fictícios.</p>
          </div>

          <div className="p-8 bg-gray-700 border border-gray-500 rounded">
            <strong className="text-2xl mb-6 block">
              Inscreva-se gratuitamente
            </strong>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-2 w-full"
            >
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="text"
                placeholder="Seu nome completo"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="email"
                placeholder="Digite seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                Acesse as aulas
              </button>
            </form>
          </div>
        </div>

        <img src={CodeMockup} className="mt-10" />
      </div>
    </div>
  );
}
