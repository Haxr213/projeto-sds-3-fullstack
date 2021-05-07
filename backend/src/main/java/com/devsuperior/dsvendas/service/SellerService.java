package com.devsuperior.dsvendas.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsvendas.dto.SellerDTO;
import com.devsuperior.dsvendas.entities.Seller;
import com.devsuperior.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {
	
	@Autowired
	private SellerRepository repository;
	
	public List<SellerDTO> findAll() {
		List<Seller> result = repository.findAll();
		/*Retorna a lista result so que em formato DTO, formando uma nova colecao
		 * convertendo todo o x da lista original, e o tolist converte para lista novamente
		 */
		return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
	}
	

}
