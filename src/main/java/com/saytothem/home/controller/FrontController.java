package com.saytothem.home.controller;

import javax.servlet.http.HttpServlet;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

public class FrontController extends HttpServlet {

	private static final long serialVersionUID = 1L;
	
	@RequestMapping(value = "main")
	public String main(Model model) {
		System.out.println("/main");
		
		return "main";
	}
}
