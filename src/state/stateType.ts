import {NetWork} from '../web3'

export interface Account {
    email: string
    password: string
    network: NetWork
}

export interface Key {
    address: string
    privateKey: string  // wif
    publicKey: string
}

export interface BalanceMvc {
    balance: string
}

export interface SensibleSatotx {
    satotxApiPrefix: string
    satotxPubKey: string
}

export interface SensibleFt {
    genesis: string
    codehash: string
    tokenName: string
    tokenSymbol: string
    tokenDecimal: number
    balance: string
    satotx: SensibleSatotx | null
}

export interface State {
    account: Account | null
    key: Key | null
    mvcBalance: BalanceMvc | null
    sensibleFtList: SensibleFt[]
    satotxConfigMap: Map<string, SensibleSatotx[]>
}

export interface TransferReceiver {
    address: string
    amount: string
}

export interface MvcUtxo{
    txId:string 
    outputIndex: number
    satoshis: number
    address: string
}