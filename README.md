# Simple Sentence Converter

## Overview

The Simple Sentence Converter is a web application built using Express.js and the "nlp" package for Natural Language Processing (NLP). It provides a simple interface for converting sentences into different grammatical forms, including past tense, present tense, future tense, and negative form.

## Features

- **Conversion to Past Tense:** Convert sentences into past tense form.
- **Conversion to Present Tense:** Convert sentences into present tense form.
- **Conversion to Future Tense:** Convert sentences into future tense form.
- **Conversion to Negative Form:** Convert sentences into negative form.

## Dependencies

The project depends on the following npm packages:
- **express:** Fast, unopinionated, minimalist web framework for Node.js.
- **body-parser:** Node.js body parsing middleware.
- **nlp:** Machine learning Natural Language Processing (NLP) library for Node.js.

## Installation

1. Clone the repository:
    ```bash
    git clone (https://github.com/nicenvrro-dev/ITST-303.git)
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

## Demo

1. Access Code Sandbox:
    ```bash
    https://l.facebook.com/l.php?u=https%3A%2F%2Fcodesandbox.io%2Fp%2Flive%2F1eb56240-8807-4995-8b46-f74ed515d3e0%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR2qvaM-BX8qb4gy32tYFYZNLu3V9x7WgcXS4Ijqiz9kyGK5gSCoS5wsFxA_aem_AXOFHJp5nSsv3kbEPZP28lN_DIJPQz7oMjMI_fcU_RKJ5hhckVeaFcDejCceu6T_kod0nM2QOoJiRvl9yL9_VTwU&h=AT1CirKn1zjHbnMK3rCDslWiOVPBZiOB3_eQO_pZQudPh9KtISEWytdMz705_MuUEsDZms_GfAyy5xZdE42l9xBLPkNCJA1604BGkhNVW-vW8fio2IXpVcAMymDMYMT3mm_qYNxsuDI
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```
2. Open a web browser and navigate to `http://localhost:3000` to access the application.
3. Enter a sentence in the input field and select the desired conversion type (past, present, future, negative).
4. Click the "Convert" button to see the converted sentence.

## Project Structure

- **index.js:** Entry point of the application containing Express routes and server configuration.
- **sentenceConverter.js:** Module for handling sentence conversion logic using the "nlp" package.
- **public/index.ejs:** HTML template file for the user interface.

## License

This project is licensed under the [MIT License](LICENSE).
