import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //array contenant les données transmisent sur l'autre component
    posts = [
        {
            title: 'Mon Premier Post',
            content: 'Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum,' +
             'qui permet donc de faire office de texte d\'attente. L\'avantage de le mettre en latin est que l\'opérateur sait au premier coup d\'oeil ' +
            'sur l\'aspect graphique.',
            loveIts: 0,
        },
        {
            title: 'Mon deuxième Post',
            content: 'Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum,' +
            'qui permet donc de faire office de texte d\'attente. L\'avantage de le mettre en latin est que l\'opérateur sait au premier coup d\'oeil ' +
            'sur l\'aspect graphique.',
            loveIts: 0,
        },
        {
            title: 'Encore un Post',
            content: 'Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum,' +
            'qui permet donc de faire office de texte d\'attente. L\'avantage de le mettre en latin est que l\'opérateur sait au premier coup d\'oeil ' +
            'que la page contenant ces lignes n\'est pas valide, et surtout l\'attention du client n\'est pas dérangée par le contenu, il demeure concentré seulement ' +
            'sur l\'aspect graphique.',
            loveIts: 0,

        },
    ];
}
