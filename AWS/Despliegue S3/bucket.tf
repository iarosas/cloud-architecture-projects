resource "aws_s3_bucket" "libros" {
  count  = 6
  bucket = "proveedores-${random_string.sufijo[count.index].id}" // Nombre del bucket es unico en todo AWS, añadimos un random para que sea unico
  tags = {
    Owner       = "Julian"
    Environment = "Dev"
    Office      = "Biblioteca"
  }
}

resource "aws_s3_bucket" "ordenadores" {
  bucket = "ordenadores-${random_string.sufijo[count.index].id}"
  count  = 6
  tags = {
    Owner       = "Julian" 
    Name        = "Dev"
    Environment = "Office"
  }
}
