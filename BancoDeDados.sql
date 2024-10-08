create database PortalDoOraculo;
use PortalDoOraculo;

-- drop database PortalDoOraculo;


create table usuario(
    id_usuario int not null primary key auto_increment,
    nomeUsuario varchar(500) not null,
    email varchar(500) not null unique,
    senha varchar(20) not null unique,
    perfil enum('admin', 'usuario') default('usuario')
);


create table produtos(
    id_produtos int not null primary key auto_increment,
    nomeProduto varchar(500) not null,
    precoProdutos float not null,
    descricao varchar(1000) not null,
    qtdDisponivel float,
    imagemProduto text
);

create table carrinho(
    id_produtos int not null,
    id_usuario int not null,
    totalProdutos int not null,
    precoCarrinho float not null, 
    precoProdutos float not null,
    nomeProduto varchar(500) not null,
    primary key (id_produtos, id_usuario),
    foreign key (id_usuario) references usuario(id_usuario),
    foreign key (id_produtos) references produtos(id_produtos)
);

select * from usuario;
select * from produtos;	
drop table produtos;
drop table carrinho;
drop table produtos;
delete from produtos where id_produtos=1;

INSERT INTO usuario (nomeUsuario, email, senha, perfil) VALUES ('Giovani', 'g@g.com', 'gs', 'admin');
INSERT INTO usuario (nomeUsuario, email, senha, perfil) VALUES ('Gui', 'a@a.com', 'bos', 'usuario');