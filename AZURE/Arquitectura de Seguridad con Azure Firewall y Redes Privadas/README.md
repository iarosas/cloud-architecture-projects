# 🔐 Secure Architecture with Azure Firewall and Private Networks 🔐

## 📝 Descripción
Este proyecto despliega una arquitectura segura utilizando Azure Firewall y redes privadas (VNets), asegurando que todo el tráfico pase por reglas de seguridad.

### 🔧 Componentes:
- **Azure Firewall**: Protege la red y controla el tráfico.
- **Azure Virtual Network (VNet)**: Red virtual con subnets privadas y públicas.
- **Azure Network Security Groups (NSGs)**: Reglas de seguridad para controlar el acceso.
- **Azure Bastion**: Acceso seguro a las VMs.

### 📂 Estructura de la Arquitectura:
1. Azure Firewall inspecciona el tráfico y lo redirige según las reglas de seguridad.
2. Las subnets públicas y privadas están protegidas por NSGs.
3. Azure Bastion permite un acceso seguro a las VMs sin exponerlas a Internet.

## 🚀 Despliegue
1. Clona este repositorio: `git clone <repo_url>`
2. Ejecuta `terraform init`.
3. Ejecuta `terraform apply` para desplegar la infraestructura segura.

## 🛠️ Requisitos
- Cuenta de Azure.
- Azure CLI.
- Terraform.

