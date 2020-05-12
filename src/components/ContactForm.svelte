<script>
  import { writable } from "svelte/store";
  import axios from "axios";

  // pattern="^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$"

  let sent;

  const DEFAULT_CONTACT = {
    name: "",
    phone: "",
    email: "",
    message: ""
  };

  export const user = writable(DEFAULT_CONTACT);

  const handleSubmit = async event => {
    const { email, phone, message, name } = $user;
    const phonePart = phone
      ? `Téléphone : ${phone}`
      : " - Pas de téléphone fourni";

    sent = true;

    const response = await axios.post(
      "https://api.elasticemail.com/v2/email/send",
      null,
      {
        params: {
          apikey: process.env.ELASTICEMAIL_KEY,
          subject: `Message de ${name}`,
          bodyText: `${message} \r\n\r\n ${phonePart} \r\n\r\n`,
          from: "tech@l-z.fr",
          fromName: "Blog de la psychanalyste",
          sender: email,
          senderName: name,
          msgTo: process.env.ELASTICEMAIL_TO,
          isTransactional: true
        }
      }
    );

    setTimeout(() => (sent = false), 3000);
  };
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
  }
  .block {
    display: flex;
    flex-direction: column;
    padding: 12px 12px 0 0;
    width: 100%;
    max-width: 500px;
  }

  .form {
    display: flex;
    flex-direction: column;
  }

  .entry {
    margin-top: 10px;
  }

  label {
    margin-top: 3px;
  }

  input[type="email"]:hover,
  input[type="tel"]:hover,
  input[type="text"]:hover,
  textarea:hover {
    border-color: var(--accent-color-3);
  }

  input[type="email"],
  input[type="tel"],
  input[type="text"],
  textarea {
    box-shadow: none;
    border-radius: 0;
    box-sizing: border-box;
    width: 100%;
    position: relative;
    outline: 0;
    border: none;
    border-bottom: solid 1px var(--grey);
    transition: all 0.3s;
    background: 0 0;
    line-height: 1.1em;
  }

  button[type="submit"] {
    text-align: center;
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    text-shadow: none;
    transition: color 0.3s ease-out, border 0.3s ease-out,
      background 0.3s ease-out, box-shadow 0.3s ease-out !important;
    border-radius: 0;
    border: none;
    padding: 12px 24px;
    background: var(--accent-color-3);
    color: var(--accent-color-1-hc);
    max-width: 120px;
  }

  input:not(:placeholder-shown):invalid,
  textarea:not(:placeholder-shown):invalid {
    border-bottom: solid 1px red;
  }

  textarea {
    resize: none;
  }
</style>

{#if sent}
  <p>Merci !</p>
{:else}
  <form class="form" on:submit|preventDefault={handleSubmit}>
    <div class="content">
      <div class="block">
        <div class="entry">
          <label>Nom (obligatoire)</label>
          <input
            name="name"
            type="text"
            bind:value={$user.name}
            placeholder="Sophie Halberstad"
            required
            pattern="\S+.*" />
        </div>
        <div class="entry">
          <label>E-mail</label>
          <input
            name="email"
            type="email"
            bind:value={$user.email}
            placeholder="mon.nom@email.com" />
        </div>
        <div class="entry">
          <label>Téléphone</label>
          <input
            name="phone"
            type="tel"
            bind:value={$user.phone}
            placeholder="01 00 00 00 00 ou +33 1 00 00 00 00" />
        </div>
      </div>
      <div class="block">
        <div class="entry">
          <label>Message (obligatoire)</label>
          <textarea
            name="message"
            rows="8"
            cols="45"
            bind:value={$user.message}
            required
            placeholder="Bonjour, ..." />
        </div>
      </div>
    </div>
    <div class="block">
      <button type="submit">Envoyer</button>
    </div>

  </form>
{/if}
