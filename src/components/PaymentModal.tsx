'use client';

import { PaymentPlan } from '@/lib/types';
import { X, Check, Copy, QrCode } from 'lucide-react';
import { useState } from 'react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: PaymentPlan;
}

export default function PaymentModal({ isOpen, onClose, plan }: PaymentModalProps) {
  const [step, setStep] = useState<'plan' | 'pix'>('plan');
  const [pixCode] = useState('00020126580014br.gov.bcb.pix013636401234-5678-9012-3456-789012345678520400005303986540539.905802BR5925GOSPEL FLIX STREAMING6009SAO PAULO62070503***6304ABCD');
  const [copied, setCopied] = useState(false);

  const copyPixCode = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#141414] rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-white text-xl font-bold">
            {step === 'plan' ? 'Confirmar Plano' : 'Pagamento PIX'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {step === 'plan' ? (
          /* Confirmação do Plano */
          <div className="p-6">
            <div className="bg-[#222] rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-lg font-bold">{plan.name}</h3>
                {plan.popular && (
                  <span className="bg-[#E50914] text-white text-xs px-2 py-1 rounded font-bold">
                    MAIS POPULAR
                  </span>
                )}
              </div>
              <div className="text-[#E50914] text-2xl font-bold mb-4">
                R$ {plan.price.toFixed(2)}/mês
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  className="w-full bg-[#333] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-[#333] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
                  placeholder="seu@email.com"
                />
              </div>

              <button
                onClick={() => setStep('pix')}
                className="w-full bg-[#E50914] hover:bg-[#f40612] text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Continuar para Pagamento PIX
              </button>
            </div>
          </div>
        ) : (
          /* Pagamento PIX */
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="bg-[#222] rounded-lg p-4 mb-4">
                <QrCode className="w-32 h-32 text-white mx-auto mb-4" />
                <p className="text-gray-300 text-sm">
                  Escaneie o QR Code com seu app do banco ou copie o código PIX
                </p>
              </div>
              
              <div className="bg-[#222] rounded-lg p-4">
                <h3 className="text-white font-bold mb-2">Valor a pagar:</h3>
                <div className="text-[#E50914] text-3xl font-bold mb-4">
                  R$ {plan.price.toFixed(2)}
                </div>
                
                <div className="mb-4">
                  <label className="block text-white text-sm font-medium mb-2">
                    Código PIX Copia e Cola:
                  </label>
                  <div className="bg-[#333] rounded-lg p-3 text-xs text-gray-300 break-all">
                    {pixCode}
                  </div>
                  <button
                    onClick={copyPixCode}
                    className="w-full mt-2 bg-gray-600 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    {copied ? 'Copiado!' : 'Copiar Código PIX'}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4 mb-4">
              <p className="text-yellow-300 text-sm">
                <strong>Importante:</strong> Após o pagamento, seu acesso será liberado em até 5 minutos. 
                Você receberá um email de confirmação.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep('plan')}
                className="flex-1 bg-gray-600 hover:bg-gray-500 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Voltar
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-[#E50914] hover:bg-[#f40612] text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Já Paguei
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}