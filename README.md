#  Canal de Produtos - Player TV Embead

<div align="center"><img src="https://i.ibb.co/mzpb4gy/preview-Canalde-Produtos.png" alt="Preview do player"></div>

##  💻 Sobre o Projeto
Player desenvolvido para atender as demandas do site [Canal de Produtos](https://canaldeprodutos.com.br). 

Clappr Base - https://github.com/clappr/clappr

Clappr ChromeCast Plugin: https://github.com/clappr/clappr-chromecast-plugin

O player possui o recurso para iniciar automaticamente, porem para que isso funcione é necessário que o audio esteja mutado. Conforme [documentação](https://goo.gl/xX8pDD)

##  🚀 Utilizando o Player
Adicionamos abaixo algumas opções de código para adição do player aos sites e aplicativos contidos na plataforma:

Player Default (AutoPlay Ativo): [Visualizar](https://gentvplay-player-clappr-javascript.vercel.app)

```html
<div style="position: relative; margin: 0;padding-bottom: 56.25%; padding-top: 35px; height: 0; overflow: hidden;">
<iframe src="https://gentvplay-player-clappr-javascript.vercel.app" width="100%" height="100%" frameborder="0" scrolling="auto" allowfullscreen style="position:absolute; margin:0; padding:0; top:0; left: 0;width: 100%; height: 100%;"></iframe>
</div>                    
```
Player Default (AutoPlay Desativado): [Visualizar](https://gentvplay-player-clappr-javascript.vercel.app/playerAutoOff.html) 

```html
<div style="position: relative; margin: 0;padding-bottom: 56.25%; padding-top: 35px; height: 0; overflow: hidden;">
<iframe src="https://gentvplay-player-clappr-javascript.vercel.app/playerAutoOff.html" width="100%" height="100%" frameborder="0" scrolling="auto" allowfullscreen style="position:absolute; margin:0; padding:0; top:0; left: 0;width: 100%; height: 100%;"></iframe>
</div>                    
```

Player com Marca D´água (AutoPlay) [Visualizar](https://gentvplay-player-clappr-javascript.vercel.app/watermark.html)
```html
<div style="position: relative; margin: 0;padding-bottom: 56.25%; padding-top: 35px; height: 0; overflow: hidden;">
<iframe src="https://gentvplay-player-clappr-javascript.vercel.app/watermark.html" width="100%" height="100%" frameborder="0" scrolling="auto" allowfullscreen style="position:absolute; margin:0; padding:0; top:0; left: 0;width: 100%; height: 100%;"></iframe>
</div> 
