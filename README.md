# Ecommerce

Este é o 1º projeto desenvolvido na ✨ **Mentoria Angular PRO 2.0** ✨

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a> 

✨ **Esse workspace foi gerado pelo [Nx build system.](https://nx.dev)** ✨

## Baixar o projeto

```
git clone https://github.com/darianeabich/ecommerce.git
cd ecommerce
npm install
```

## Servir o projeto localmente
```
npm start
```
ou
```
npx nx serve
```
O projeto será servido por padrão em [http://localhost:4200](http://localhost:4200).

## Executar tarefas independentes

```
npx nx <NOME_DA_TAREFA> <NOME_DO_MODULO>
```
> Exemplos:
```
npx nx test ecommerce
npx nx lint modules-layout
```

## Visualizar Dependency Graphy
```
npx nx graph
```

## Executar tarefas somente do que foi afetado
```
npx nx affected:<NOME_DA_TAREFA>
```
> Exemplos:
```
npx nx affected:test
npx nx affected:graph
```
