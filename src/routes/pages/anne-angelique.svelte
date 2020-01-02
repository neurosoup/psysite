<script>
  import LazyImage from "../../components/LazyImage.svelte";
</script>

<style>
  .wrapper {
    margin-left: 5vw;
    margin-right: 5vw;
  }
  .vertical {
    display: flex;
    flex-direction: column;
  }

  .horizontal {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  .half {
    width: 100%;
    padding-right: 0;
  }

  h2 {
    text-transform: uppercase;
  }

  @media only screen and (min-width: 1024px) {
    .horizontal {
      flex-direction: row;
    }
    .half {
      width: 50%;
      padding-right: 20px;
    }
  }
</style>

<svelte:head>
  <title>Anne-Angélique Zémour</title>
</svelte:head>
<div class="wrapper vertical">
  <section>
    <h2>Qui suis-je</h2>
    <p>
      Sophrologue et psychanalyste depuis 2006, j’aide les femmes et les hommes
      stressés et oppressés qui veulent vivre pleinement leur liberté d’être et
      d’exister,à mieux connaître qui ils sont vraiment et à retrouver confiance
      en eux pour se libérer de ce qui entrave leur développement personnel.
    </p>
  </section>
  <section>
    <div class="horizontal">
      <div class="half">
        <h2>De la découverte à la transformation</h2>
        <p>
          Je suis
          <strong>Anne-Angélique Zémour</strong>
          , votre sophrologue et psychanalyste.
        </p>
        <p>
          Je me suis longtemps soumise aux injonctions, attentes et désirs de
          mon entourage, de la société. La rencontre avec la sophrologie et la
          découverte de la psychanalyse m’ont offert
          <strong>une véritable liberté d’être et d’exister</strong>
          . Avant mes premières séances :
        </p>
        <ul>
          <li>
            Je ne savais pas qui j’étais ni quels étaient mes désirs, ce que je
            voulais vraiment, ce qui était important pour moi et moi seule
          </li>
          <li>
            Je reniais ce que je valais, quelle était la place que je voulais
            prendre dans l’existence
          </li>
          <li>
            Je tentais vainement de satisfaire les désirs des autres, je
            dépensais beaucoup de temps et d’énergie à vouloir plaire à tout le
            monde, combler leurs attentes et les rendre heureux au prix de mon
            propre bonheur
          </li>
          <li>
            Je me soumettais très facilement aux regards et aux jugements
            négatifs des autres
          </li>
        </ul>
        <p>
          Avec la sophrologie et la psychanalyse,
          <strong>j’ai appris :</strong>
        </p>
        <ul>
          <li>
            Comment aller à la rencontre de mon individualité dans ce qu’elle a
            de meilleur et de pire
          </li>
          <li>A savoir ce que je veux et comment agir pour l’obtenir</li>
          <li>
            Quelle sont ma valeur et mes valeurs de vie, à les respecter et les
            faire respecter
          </li>
          <li>
            A avoir confiance en moi pour affirmer mon autonomie, ma
            responsabilité et ma liberté
          </li>
        </ul>
      </div>
      <div>
        <LazyImage src="images/aa1.jpg" circle sizeRatio="40vw" />
      </div>
    </div>

    <p>
      Le point commun de la sophrologie et de la psychanalyse, c’est le corps.
      La première affirme que tout passe par le corps et propose des techniques
      de relaxation qui offrent une pleine conscience de mon corps, de mes états
      émotionnels, de ma relation à l’existence, ici et maintenant. La seconde
      m’amène à réfléchir à mon être profond et inconscient qui s’exprime bien
      souvent à travers les symptômes éprouvés par le corps, et m’invite à me
      libérer de mes névroses, mes mécanismes de défense, à retrouver le plaisir
      de vivre.
    </p>
    <p>
      Ces deux approches m’ont permis de développer ma propre approche
      thérapeutique: la relaxation et l’analyse s’avèrent être d’une
      complémentarité indéniable. Aujourd’hui, l’une et l’autre me permettent de
      me sentir heureuse, de vivre pleinement ma vie, de me sentir libre. Et la
      bonne nouvelle, c’est que cette expérience est à votre portée! Voulez-vous
      la vivre vous aussi?
    </p>
  </section>
</div>
