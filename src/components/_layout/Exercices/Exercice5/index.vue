<template>
  <div class="first-container">
    <div class="header">
      <div class="buttons">
        <div class="button" @click="$router.go(-1)">
          Précédent
        </div>
        <div class="button" style="visibility: hidden">
          Suivant
        </div>
      </div>
      <div class="title">
        Ton dernier défi, un peu de javascript.
      </div>
      <div class="content">
        <p>Le but de cet exercice est d'évaluer ton sens de l'algorithmie'.</p>
        <p>créer un algorithme pour déchiffrer le message secret</p>
        <p>Le chiffre de césar, tu connais?</p>
        <p>un chiffre de césar te permet de cripter une chaine de caractère en décalant la lettre,</p>
        <p>du nombre de lettre défini par une variable (aucune lettre avec un accent)</p>
        <p>ex: cesar(2, "salut") retournera "ucnqv"</p>
        <p>a toi de jouer (et ne triche pas, on le vera!!!)</p>
    </div>
  </div>
  <div class="body">
    <div class="left">
      <ul class="themes">
        Thèmes:
        <li>Algorithme</li>
        <li>JavaScript</li>
        <li>César</li>
      </ul>
    </div>
    <div class="separator">
    </div>
    <div class="right">
      <p class="texte">Le code : {{phrase}}</p>
      <input type="number" name="number" value="number" v-model="number">
      <p class="texte">Résultat: {{cesar(number, phrase)}}</p>
    </div>
    <div class="right">
      <h5>un messsage à crypter </h5>
      <input class="texte" placeholder="message à coder" type="texte" name="" v-model="hideSentence"> 
      <input type="number" name="keyNumber" value="keyNumber" id ="keyNumber" v-model="keyNumber" debounce="250">
      <p class="texte">Résultat: {{encryptCesar(keyNumber, hideSentence)}}</p>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: 0,
      phrase: "Lkroiozgzout, za gy xéayyo zut ingrrktmk",
      keyNumber: 0,
      hideSentence: ""
    };
  },
  methods: {
    cesar(number, text) {
      let i = 0;
      this.number = Number(number);
      let decryptedSentence = "";
      while (i < text.length) {
        let numberChar = text.charCodeAt(i);
        if (this.isLetter(numberChar)) {
          numberChar += this.number;
          if (this.isAfterZ(numberChar, this.number)) {
            numberChar -= 26;
          }
          if (this.isBeforeA(numberChar, this.number)) {
            numberChar += 26;
          }
        }
        let decryptedChar = String.fromCharCode(numberChar);
        decryptedSentence += decryptedChar;
        i++;
      }
      return decryptedSentence;
    },

    isLetter(numberChar) {
      return (
        this.isLowestCaseLetter(numberChar) ||
        this.isUpperCaseLetter(numberChar)
      );
    },

    isLowestCaseLetter(numberChar) {
      let minNumber = "a".charCodeAt();
      let maxNumber = "z".charCodeAt();
      return minNumber <= numberChar && numberChar <= maxNumber;
    },

    isUpperCaseLetter(numberChar) {
      let minUpperCaseNumber = "A".charCodeAt();
      let maxUpperCaseNumber = "Z".charCodeAt();
      return (
        minUpperCaseNumber <= numberChar && numberChar <= maxUpperCaseNumber
      );
    },

    isAfterZ(numberChar, number) {
      let zCode = "z".charCodeAt(0);
      let zUpper = "Z".charCodeAt(0);
      return (
        (zUpper < numberChar && numberChar <= (zUpper + number)) ||
        (zCode < numberChar && numberChar <= (zCode + number))
      );
    },
    isBeforeA(numberChar, number) {
      let aCode = "a".charCodeAt(0);
      let aUpper = "A".charCodeAt(0);
      return (
        (aUpper > numberChar && numberChar > (aUpper + number)) ||
        (aCode > numberChar && numberChar >= (aCode + number))  
      );
    },
    //encrypt in Ceasar's code

    encryptCesar(keyNumber, text) {
      let i = 0;  
      this.keyNumber = Number(keyNumber);
      let isEncryptSentence = "";
      while (i < text.length) {
        let isEncryptLetter = "";
        let isCodeNumber = text.charCodeAt([i]);
        if (this.isLetter(isCodeNumber)) {
          console.log(this.keyNumber)
          if (this.isAfterZ(isCodeNumber,(this.keyNumber))) {
          console.log(this.isAfterZ(isCodeNumber, (this.keyNumber)));
            console.log("n2: " + (this.keyNumber));
            isCodeNumber -= 26;
          }
          if (this.isBeforeA(isCodeNumber,(this.keyNumber))) {
            console.log("n3: " + isCodeNumber);
            isCodeNumber += 26;
          }
          isCodeNumber -= this.keyNumber;
          isEncryptLetter = String.fromCharCode(isCodeNumber);
        } else isEncryptLetter = text[i];
        isEncryptSentence += isEncryptLetter;
        i++;
      }
      return isEncryptSentence;
    },

    components: {}
  }
};
</script>
<style>

</style>
