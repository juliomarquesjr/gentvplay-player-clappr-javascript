#  GenTV Player

<div align="center"><img src="https://i.ibb.co/mvSzFVw/previewgentv2.png" alt="Preview do player"></div>

##  💻 Sobre o projeto
Esse projeto foi desenvolvido para atender as demandas do site GenTV Play. Foi utilizado como base a biblioteca do Clappr.io, para maiores informações segue alguns links abaixo:

Clappr Base - https://github.com/clappr/clappr

Clappr ChromeCast Plugin: https://github.com/clappr/clappr-chromecast-plugin

O player inicia automaticamente, porem para que isso funcione é necessário que o audio esteja mutado. Conforme [documentação](https://goo.gl/xX8pDD)

##  🚀 Utilizando o GenTV Player
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
```

###  Tarefas a serem implementadas
O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:
- [x] Compatibilidade com HLS
- [x] Compatibilidade com Google Chrome e Cast
- [x] Inicializar com reprodução (AutoPlay)
- [ ] Compatibilidade com Apple Air Play
- [x] Imagem de apresentação (Poster)
- [x] Alterar esquema de cores dos botões
- [x] Implementação de Marca d´água
- [x] Responsividade

##  🤝 Desenvolvedores
Agradecemos às seguintes pessoas que contribuíram para este projeto:
<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars3.githubusercontent.com/u/31936044" width="100px;" alt="Foto de Julio Marques"/><br>
        <sub>
          <b>Julio Marques</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars3.githubusercontent.com/u/31936044" width="100px;" alt="Foto de Matheus Brasil"/><br>
        <sub>
          <b>Matheus Brasil</b>
        </sub>
      </a>
    </td>

  </tr>
</table>