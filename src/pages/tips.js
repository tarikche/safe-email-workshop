// src/app/tips/page.js

import Image from 'next/image';


export default function Tips() {
  return (
    <div className='items-center justify-center'>
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Page de Conseils : Sécurisez vos Emails contre les Phishing et les Cybermenaces</h1>
        <h2>1/ Introduction à la sécurité des emails</h2>
        <p>
          Les emails sont l’un des moyens de communication les plus utilisés, mais aussi l’une des principales cibles des cybercriminels. Le phishing, les logiciels malveillants et l’usurpation d’identité sont quelques-unes des menaces courantes qui circulent par email. Il est essentiel de comprendre comment repérer ces attaques et comment protéger vos informations personnelles.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}><Image src="/1.png" alt="Description de l'image" width={900} height={500} /></div>

        {/* Ajoute ici le contenu de la page des conseils */}
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold"></h1>
        <h2>2/ Comprendre le phishing</h2>
        <p>
          Le phishing est une technique d’escroquerie en ligne où des attaquants se font passer pour des entités fiables (banques, entreprises, plateformes) pour vous inciter à leur fournir des informations sensibles (mots de passe, informations bancaires). Les emails de phishing contiennent souvent un lien menant à un faux site web qui semble légitime.

          Comment repérer un email de phishing :
          • L'email contient une demande urgente, comme la validation immédiate d’un compte.
          • L'adresse de l'expéditeur semble suspecte, par exemple : "support@paypa1.com" au lieu de "support@paypal.com".
          • L'email vous demande de cliquer sur un lien ou de fournir des informations sensibles.

          Une capture d'écran annotée d'un email de phishing avec des indications sur les signes à repérer (URL trompeuse, faute d’orthographe, urgence de la demande).


        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}><Image src="/2.png" alt="Description de l'image" width={900} height={500} /></div>
        {/* Ajoute ici le contenu de la page des conseils */}
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold"></h1>
        <h2>3/ Conseils pour éviter le phishing</h2>
        <p>
          Voici quelques conseils pratiques pour éviter de vous faire piéger par des attaques de phishing :
          • Ne cliquez pas immédiatement sur les liens. Passez votre souris dessus pour voir où ils mènent réellement. Si l’URL semble suspecte, ne cliquez pas.
          • Ne fournissez jamais d'informations sensibles via email, même si l’email semble provenir d'une institution de confiance. Contactez l’entreprise directement via leur site officiel.
          • Activez l'authentification à deux facteurs (2FA). Cela ajoute une couche de protection supplémentaire à vos comptes.


        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}><Image src="/3.png" alt="Description de l'image" width={900} height={500} /></div>
        {/* Ajoute ici le contenu de la page des conseils */}
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold"></h1>
        <h2>4/ Que faire en cas d’email suspect ?</h2>
        <p>
          Si vous recevez un email suspect, voici les étapes à suivre :
          1. Ne répondez pas à l'email.
          2. Ne cliquez sur aucun lien et n’ouvrez pas les pièces jointes.
          3. Signalez l'email à votre service de messagerie ou à un outil comme Google Safe Browsing.
          4. Supprimez l'email une fois signalé.
          Conseil pratique :
          Toujours utiliser un filtre anti-phishing dans votre messagerie et activer des fonctionnalités de sécurité comme la vérification des liens.


        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}><Image src="/4.png" alt="Description de l'image" width={900} height={500} /></div>
        {/* Ajoute ici le contenu de la page des conseils */}
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold"></h1>
        <h2>5/ Exemples concrets d'attaques de phishing</h2>
        <p>

          Voici quelques exemples d'attaques de phishing réelles qui ont touché de grandes entreprises :
          • En 2016, des hackers ont envoyé des emails de phishing à des employés de Google et Facebook, se faisant passer pour un fournisseur et réussissant à voler plus de 100 millions de dollars.
          • En 2017, des emails de phishing sophistiqués ont ciblé les clients de Netflix, leur demandant de mettre à jour leurs informations de paiement via un faux site web.
          Ces exemples montrent que même les grandes entreprises ne sont pas à l'abri des attaques de phishing. Il est donc crucial de rester vigilant.

        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}><Image src="/5.png" alt="Description de l'image" width={900} height={500} /></div>
        {/* Ajoute ici le contenu de la page des conseils */}
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold"></h1>
        <h2>6/ Testez vos connaissances : Petit quizz interactif</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}><Image src="/6.png" alt="Description de l'image" width={900} height={500} /></div>
        <p>
          Vérifiez vos connaissances avec ce quizz rapide sur les bonnes pratiques en matière de sécurité des emails. Savez-vous comment repérer une tentative de phishing ?

          • Question 1 : Quel est un signe évident d'un email de phishing ?
          ○ A. Une adresse email suspecte.
          ○ B. Un expéditeur que vous ne connaissez pas.
          ○ C. Un lien non sécurisé.
          ○ D. Toutes les réponses ci-dessus.
          • Question 2 : Que devez-vous faire si vous recevez un email vous demandant vos informations bancaires ?
          ○ A. Fournir les informations demandées.
          ○ B. Contacter directement l’institution en question via leur site officiel.
          ○ C. Répondre à l'email pour en savoir plus.

          Conseil :
          Restez informé des nouvelles menaces de phishing et participez régulièrement à des formations de sensibilisation.

        </p>
        {/* Ajoute ici le contenu de la page des conseils */}
      </div>
    </div>

  );
}
