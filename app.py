from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/gleznas')
def gleznas():
    return render_template('gleznas.html')

@app.route('/skulpturas')
def skulpturas():
    return render_template('skulpturas.html')

@app.route('/pieminekli')
def pieminekli():
    return render_template('pieminekli.html')

@app.route('/foto')
def foto():
    return render_template('foto.html')

if __name__ == "__main__":
    app.run(debug=True)
