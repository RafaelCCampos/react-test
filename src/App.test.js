import React from 'react'

import { render, screen } from '@testing-library/react'

import App, {calcularNovoSaldo} from './App'

describe('Componente principal', () => {
    describe('Quando eu abro o app do banco', () => {
        it('Mostrar o nome do banco', () => {
            render(<App/>)
            expect(screen.getByText('ByteBank')).toBeInTheDocument()
        })
        
        it('O saldo é exibido', () => {
            render(<App/>)
            expect(screen.getByText('Saldo:')).toBeInTheDocument()
        })

        it('O botão realizar operação é exibido', () => {
            render(<App/>)
            expect(screen.getByText('Realizar operação')).toBeInTheDocument()
        })
    })

    describe('Quando eu realizo uma transação',() => {
        test('que é um saque, o valor vai diminuir', () => {
            const valores = {
                transacao: 'saque',
                valor: 200
            }
            const novoSaldo = calcularNovoSaldo(valores, 2000)
            expect(novoSaldo).toBe(1800)
        })

        test('que é um deposito, o valor vai aumentar', () => {
            const valores = {
                transacao: 'deposito',
                valor: 150
            }
            const novoSaldo = calcularNovoSaldo(valores,3000)
            expect(novoSaldo).toBe(3150)
        })

        test('que é um saque sem saldo em conta, saldo deve ficar negativo', () => {
            const valores = {
                transacao: 'saque',
                valor: 200
            }
            const novoSaldo = calcularNovoSaldo(valores, 50)
            expect(novoSaldo).toBe(-150)
        })
        
    })
})