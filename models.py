class Painting:
    def __init__(self, filename, title, artist):
        self.filename = filename
        self.title = title
        self.artist = artist

    def image_url(self):
        return f'paintings/{self.filename}'

class Sculpture:
    def __init__(self, filename, title, artist):
        self.filename = filename
        self.title = title
        self.artist = artist

    def image_url(self):
        return f'sculptures/{self.filename}'

class Piemineklis:
    def __init__(self, filename, title, artist):
        self.filename = filename
        self.title = title
        self.artist = artist

    def image_url(self):
        return f'pieminekli/{self.filename}'

class Foto:
    def __init__(self, filename, title, artist):
        self.filename = filename
        self.title = title
        self.artist = artist

    def image_url(self):
        return f'fotos/{self.filename}'