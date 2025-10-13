from flask import Flask, render_template
from models import Painting, Sculpture, Piemineklis, Foto


app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/gleznas')
def gleznas():
    paintings = [
        Painting('glezna1.png', 'Saulains koks', 'Haojans'),
        Painting('glezna2.jpg', 'jett', 'Haojans'),
        Painting('glezna3.png', 'Putns', 'Haojans'),
        Painting('glezna4.png', 'Icebox', 'Haojans'),
        Painting('glezna5.jpg', 'Fēnikss', 'Haojans'),
        Painting('glezna6.png', 'Pašportrets', 'Haojans'),
        Painting('glezna7.jpg', '蝰蛇', 'Haojans'),
        Painting('glezna8.jpg', '夜露', 'Haojans')
    ]
    return render_template('gleznas.html', paintings=paintings)

@app.route('/skulpturas')
def skulpturas():
    sculptures = [
        Sculpture('skulp1.jpg', 'Pārdoma', 'Haojans'),
        Sculpture('skulp2.jpg', 'Mēness', 'Haojans'),
        Sculpture('skulp3.jpeg', 'Lidmašīna', 'Haojans'),
        Sculpture('skulp4.jpeg', 'Akmeņi', 'Haojans')
    ]
    return render_template('skulpturas.html', sculptures=sculptures)

@app.route('/pieminekli')
def pieminekli():
    pieminekli = [
        Piemineklis('piem1.jpg', 'Galva', 'Haojans'),
        Piemineklis('piem2.jpg', 'Grandiozais Latvijas brīvības piemineklis', 'Haojans'),
        Piemineklis('piem3.jpg', 'Paulas lucky charm', 'Haojans')
    ]
    return render_template('pieminekli.html', pieminekli=pieminekli)

@app.route('/foto')
def foto():
    fotos = [
        Foto('foto1.jpg', 'Pīles', 'Haojans'),
        Foto('foto2.jpg', 'Ziema Lietuvā', 'Haojans'),
        Foto('foto3.jpg', 'Pingvīni', 'Haojans'),
        Foto('foto4.jpg', 'Laimas pulkstenis', 'Haojans'),
        Foto('foto6.jpg', 'Kolekcija: Puķes', 'Haojans'),
        Foto('foto7.jpg', 'Kolekcija: Puķes', 'Haojans'),
        Foto('foto8.jpg', 'Ūdenskritums', 'Haojans'),
        Foto('foto9.jpg', 'Kolekcija: Puķes', 'Haojans'),
        Foto('foto12.jpeg', 'Kuģis', 'Haojans'),
        Foto('foto13.jpeg', 'Ķīnā', 'Haojans')
    ]
    return render_template('foto.html', fotos=fotos)

if __name__ == "__main__":
    app.run(debug=True)
